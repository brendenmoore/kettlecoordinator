package org.tampasa.kettles.models;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Route extends AbstractEntity{

    private Integer index;

    private Integer color;

    private String driver;

    @OneToMany
    private List<Store> stores = new ArrayList<>();



    // Constructors

    public Route() {
    }

    // Getters and Setters


    public Integer getIndex() {
        return index;
    }

    public void setIndex(Integer index) {
        this.index = index;
    }

    public Integer getColor() {
        return color;
    }

    public void setColor(Integer color) {
        this.color = color;
    }

    public String getDriver() {
        return driver;
    }

    public void setDriver(String driver) {
        this.driver = driver;
    }
}
