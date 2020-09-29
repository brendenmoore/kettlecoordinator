package org.tampasa.kettles.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.tampasa.kettles.user.ApplicationUser;

public interface ApplicationUserRepository extends JpaRepository<ApplicationUser, Integer> {

    ApplicationUser findByUsername(String username);

}
