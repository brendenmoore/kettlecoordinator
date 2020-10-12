package org.tampasa.kettles.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.tampasa.kettles.user.ApplicationUser;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotBlank;

@Entity
public class Ringer extends AbstractEntity{

    @NotBlank
    private String firstName;

    @NotBlank
    private String lastName;

    private String phoneNumber;

    @ManyToOne
    private ApplicationUser applicationUser;

    private String notes;

    //Constructors
    public Ringer() {
    }

    public Ringer(@NotBlank String firstName, @NotBlank String lastName, ApplicationUser applicationUser, String notes, String phoneNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.applicationUser = applicationUser;
        this.notes = notes;
        this.phoneNumber = phoneNumber;
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

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getNotes() {
        return notes;
    }

    @JsonIgnore
    public ApplicationUser getApplicationUser() {
        return applicationUser;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }
}
