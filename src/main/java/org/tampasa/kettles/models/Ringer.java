package org.tampasa.kettles.models;

import javax.persistence.Entity;
import javax.validation.constraints.NotBlank;

@Entity
public class Ringer extends AbstractEntity{

    @NotBlank
    private String firstName;

    @NotBlank
    private String lastName;

    @NotBlank
    private Integer phoneNumber;

    private String notes;

    //Constructors
    public Ringer() {
    }

    //Getters and Setters

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Integer getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(Integer phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }
}
