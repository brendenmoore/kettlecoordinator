package org.tampasa.kettles.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.tampasa.kettles.models.Route;
import org.tampasa.kettles.models.data.RouteRepository;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class RouteController {

    @Autowired
    private RouteRepository routeRepository;

    @GetMapping("/routes")
    public List<Route> getRoutes() {return (List<Route>) routeRepository.findAll();}

    @GetMapping("/routes/{id}")
    public Route getRouteById(@PathVariable Integer id) {
        return routeRepository.findById(id).orElse(null);
    }

    @PostMapping("/routes")
    void addRoute(@RequestParam Route route) {routeRepository.save(route);}
}
