package org.tampasa.kettles.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.tampasa.kettles.models.Ringer;
import org.tampasa.kettles.models.data.RingerRepository;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class RingerController {

    @Autowired
    private RingerRepository ringerRepository;

    @GetMapping("/ringers")
    public List<Ringer> getRingers() {
        return (List<Ringer>) ringerRepository.findAll();
    }

    @GetMapping("/ringers/{id}")
    public Ringer getRingerById(@PathVariable("id") Integer id) {
        Optional<Ringer> optionalRinger = ringerRepository.findById(id);
        return optionalRinger.orElse(null);
    }

    @PostMapping(path = "/ringers", consumes = "application/json", produces = "application/json")
    public ResponseEntity<Object> addRinger(@RequestBody Ringer ringer) {
        ringerRepository.save(ringer);
        return new ResponseEntity<>("Ringer has been created successfully", HttpStatus.CREATED);
    }

    @PutMapping("/ringers/{id}")
    public  ResponseEntity<Object> updateRinger(@PathVariable("id") Integer id, @RequestBody Ringer ringer) {
        ringer.setId(id);
        // I wouldn't set the id if I'm sending in a ringer object from the front end that already has the id.
        // In fact it's probably bad practice to even have a setId method.
        // I wouldn't even need the path variable in that case. Is that okay?
        ringerRepository.save(ringer);
        return new ResponseEntity<>("Ringer has been updated successfully", HttpStatus.OK);
    }

    @DeleteMapping("/ringers/{id}")
    public ResponseEntity<Object> deleteRinger(@PathVariable("id") Integer id) {
        ringerRepository.deleteById(id);
        return  new ResponseEntity<>("Ringer has been deleted successfully", HttpStatus.OK);
    }

}
