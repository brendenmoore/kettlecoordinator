package org.tampasa.kettles.models.data;

import org.springframework.data.repository.CrudRepository;
import org.tampasa.kettles.models.Record;

public interface RecordRepository extends CrudRepository<Record, Integer> {
}
