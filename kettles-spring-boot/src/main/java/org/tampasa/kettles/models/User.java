package org.tampasa.kettles.models;

import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.List;

@Entity
public class User{

    @Id
    @GeneratedValue
    private int id;

    @NotBlank
    @Length(min = 3, max = 22)
    private String userName;

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

    public User(String name, @NotBlank @Email String email) {
        this.email = email;
    }
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
