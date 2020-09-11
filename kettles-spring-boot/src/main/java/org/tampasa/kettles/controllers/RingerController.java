package org.tampasa.kettles.controllers;

import org.springframework.beans.factory.annotation.Autowired;
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
    void addRinger(@RequestBody Ringer ringer) {
        ringerRepository.save(ringer);
    }

}
