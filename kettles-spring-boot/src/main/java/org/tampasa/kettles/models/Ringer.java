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

    private String fullName;

    @ManyToOne
    private ApplicationUser applicationUser;

    private String notes;

    //Constructors
    public Ringer() {
    }

    public Ringer(@NotBlank String firstName, @NotBlank String lastName, ApplicationUser applicationUser, String notes, String phoneNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
        this.applicationUser = applicationUser;
        this.notes = notes;
        this.phoneNumber = phoneNumber;
    }

    //Getters and Setters

    public String getFullName() {
        return fullName;
    }

    public void updateFullName() {
        this.fullName = this.firstName + " " + this.lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
        this.updateFullName();
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
        this.updateFullName();
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
