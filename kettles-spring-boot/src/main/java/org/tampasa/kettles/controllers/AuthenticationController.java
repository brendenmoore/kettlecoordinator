package org.tampasa.kettles.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.tampasa.kettles.user.ApplicationUserRepository;

@RestController
public class AuthenticationController {

    @Autowired
    ApplicationUserRepository applicationUserRepository;



}
