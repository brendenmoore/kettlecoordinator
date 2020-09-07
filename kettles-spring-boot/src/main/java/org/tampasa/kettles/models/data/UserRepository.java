package org.tampasa.kettles.models.data;

import org.springframework.data.repository.CrudRepository;
import org.tampasa.kettles.models.User;

public interface UserRepository extends CrudRepository<User, Integer> {

}
