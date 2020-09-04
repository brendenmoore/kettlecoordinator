package org.tampasa.kettles.models.data;

import org.springframework.data.repository.CrudRepository;
import org.tampasa.kettles.models.Template;

public interface TemplateRepository extends CrudRepository<Template, Integer> {
}
