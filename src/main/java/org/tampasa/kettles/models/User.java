package org.tampasa.kettles.models;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.List;

@Entity
public class User extends AbstractEntity {

    @NotBlank
    @Email
    private String email;

    @OneToMany
    private List<Ringer> ringers = new ArrayList<>();

    @OneToMany
    private List<Sheet> sheets = new ArrayList<>();

    @OneToOne
    private Template template;


    // Constructors
    public User() {}


    // Getters and Setters

    public List<Ringer> getRingers() {
        return ringers;
    }

    public void setRingers(List<Ringer> ringers) {
        this.ringers = ringers;
    }

    public List<Sheet> getSheets() {
        return sheets;
    }

    public void setSheets(List<Sheet> sheets) {
        this.sheets = sheets;
    }

    public Template getTemplate() {
        return template;
    }

    public void setTemplate(Template template) {
        this.template = template;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }



}
