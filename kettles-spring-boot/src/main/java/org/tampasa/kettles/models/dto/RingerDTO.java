package org.tampasa.kettles.models.dto;

import org.tampasa.kettles.user.ApplicationUser;

import javax.persistence.ManyToOne;
import javax.validation.constraints.NotBlank;

public class RingerDTO {
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private Long userId;
    private String notes;

    public Long getUserId() {
        return userId;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public String getNotes() {
        return notes;
    }
}
