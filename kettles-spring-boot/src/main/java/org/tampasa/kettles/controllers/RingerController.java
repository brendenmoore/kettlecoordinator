package org.tampasa.kettles.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;
import org.tampasa.kettles.models.Ringer;
import org.tampasa.kettles.models.data.RingerRepository;
import org.tampasa.kettles.models.dto.RingerDTO;
import org.tampasa.kettles.user.ApplicationUser;
import org.tampasa.kettles.user.ApplicationUserRepository;

import java.security.Principal;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "/ringers")
@RestController
public class RingerController {

    @Autowired
    private ApplicationUserRepository userRepository;

    @Autowired
    private RingerRepository ringerRepository;

    @GetMapping()
    public List<Ringer> getAllRingers() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return userRepository.findByUsername(authentication.getPrincipal().toString()).getRingers();
    }

    @GetMapping("/{id}")
    public Ringer getRingerById(@PathVariable("id") Integer id) {
        Optional<Ringer> optionalRinger = ringerRepository.findById(id);
        return optionalRinger.orElse(null);
    }

    @PostMapping(consumes = "application/json", produces = "application/json")
    public ResponseEntity<Object> addRinger(@RequestBody RingerDTO ringerDTO) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        ApplicationUser user = userRepository.findByUsername(authentication.getPrincipal().toString());
        Ringer ringer = new Ringer(ringerDTO.getFirstName(), ringerDTO.getLastName(), user, ringerDTO.getNotes(), ringerDTO.getPhoneNumber());
        user.addRinger(ringer);
        ringerRepository.save(ringer);
        return new ResponseEntity<>(ringer, HttpStatus.CREATED);
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

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteRinger(@PathVariable("id") Integer id) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        ApplicationUser user = userRepository.findByUsername(authentication.getPrincipal().toString());
        Boolean removed = user.removeRingerById(id);
        userRepository.save(user);
        ringerRepository.deleteById(id);
        if (removed) {
            return  new ResponseEntity<>("Ringer has been deleted successfully", HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>("Ringer not removed", HttpStatus.BAD_REQUEST);
        }
    }

}
