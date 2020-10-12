package org.tampasa.kettles.models;

import org.hibernate.validator.constraints.Length;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Route extends AbstractEntity{

    @NotBlank(message = "Name must not be blank")
    @Length(min = 1, max = 100, message = "Name must be between 1 and 100 characters")
    private String name;

    private int index;

    private int color;

    private String driver;

    @OneToMany
    private List<Store> stores = new ArrayList<>();



    // Constructors

    public Route() {
    }

    // Getters and Setters


    public List<Store> getStores() {
        return stores;
    }

    public void setStores(List<Store> stores) {
        this.stores = stores;
    }

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
