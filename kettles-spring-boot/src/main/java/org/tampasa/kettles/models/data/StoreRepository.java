package org.tampasa.kettles.models.data;

import org.springframework.data.repository.CrudRepository;
import org.tampasa.kettles.models.Store;

public interface StoreRepository extends CrudRepository<Store, Integer> {
}
