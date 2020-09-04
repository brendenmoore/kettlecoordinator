package org.tampasa.kettles.models;

import javax.persistence.MappedSuperclass;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@MappedSuperclass
public abstract class AbstractSheet extends AbstractEntity{

    @OneToMany
    private List<Route> routes = new ArrayList<>();

    public AbstractSheet() {
    }

    public List<Route> getRoutes() {
        return routes;
    }

    public void setRoutes(List<Route> routes) {
        this.routes = routes;
    }
}
