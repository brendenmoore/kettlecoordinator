package org.tampasa.kettles.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.tampasa.kettles.models.Ringer;
import org.tampasa.kettles.models.data.RingerRepository;
import org.tampasa.kettles.models.dto.RingerDTO;
import org.tampasa.kettles.user.ApplicationUser;
import org.tampasa.kettles.user.ApplicationUserRepository;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "/{userId}/ringers")
@RestController
public class RingerController {

    @Autowired
    private ApplicationUserRepository userRepository;

    @Autowired
    private RingerRepository ringerRepository;

    @GetMapping()
    public List<Ringer> getAllRingers(@PathVariable("userId") Long userId ) {
        return (List<Ringer>) userRepository.findById(userId).getRingers();
    }

    @GetMapping("/{id}")
    public Ringer getRingerById(@PathVariable("id") Integer id) {
        Optional<Ringer> optionalRinger = ringerRepository.findById(id);
        return optionalRinger.orElse(null);
    }

    @PostMapping(consumes = "application/json", produces = "application/json")
    public ResponseEntity<Object> addRinger(@PathVariable("userId") Long userId, @RequestBody RingerDTO ringerDTO) {
        if (!userId.equals(ringerDTO.getUserId())) {
            return new ResponseEntity<>("Error, ringer not added. User Id doesn't match", HttpStatus.BAD_REQUEST);
        }
        if (userRepository.findById(ringerDTO.getUserId()) == null) {
            return new ResponseEntity<>("Error, ringer not added. User Id does not exist", HttpStatus.BAD_REQUEST);
        }
        ApplicationUser user = userRepository.findById(userId);
        Ringer ringer = new Ringer(ringerDTO.getFirstName(), ringerDTO.getLastName(), user, ringerDTO.getNotes(), ringerDTO.getPhoneNumber());
        user.addRinger(ringer);
        ringerRepository.save(ringer);
        return new ResponseEntity<>("Ringer has been created successfully", HttpStatus.CREATED);
    }

    // TODO: use DTO here
    @PutMapping("/{id}")
    public  ResponseEntity<Object> updateRinger(@RequestBody Ringer ringer, @PathVariable("id") Integer id) {
        if (!id.equals(ringer.getId())) {
            return new ResponseEntity<>("Error, ringer not updated. Id doesn't match", HttpStatus.BAD_REQUEST);
        }
        ringerRepository.save(ringer);
        return new ResponseEntity<>("Ringer has been updated successfully", HttpStatus.OK);
    }

    @DeleteMapping("/ringers/{id}")
    public ResponseEntity<Object> deleteRinger(@PathVariable("id") Integer id) {
        ringerRepository.deleteById(id);
        return  new ResponseEntity<>("Ringer has been deleted successfully", HttpStatus.OK);
    }

}
