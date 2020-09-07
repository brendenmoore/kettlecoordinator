package org.tampasa.kettles.models.data;

import org.springframework.data.repository.CrudRepository;
import org.tampasa.kettles.models.Sheet;

public interface SheetRepository extends CrudRepository<Sheet, Integer> {
}
