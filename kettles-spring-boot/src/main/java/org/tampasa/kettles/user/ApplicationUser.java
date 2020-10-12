package org.tampasa.kettles.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.tampasa.kettles.models.Ringer;
import org.tampasa.kettles.models.Sheet;
import org.tampasa.kettles.models.Template;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
public class ApplicationUser {

    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String password;

    @OneToMany
    private List<Ringer> ringers = new ArrayList<>();

    @OneToMany
    private List<Sheet> sheets = new ArrayList<>();

    @OneToOne
    private Template template;


    // Constructors
    ApplicationUser() {}

    public ApplicationUser(String username, String password) {
        this.username = username;
        this.password = password;
    }

    // Getters and Setters

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public List<Ringer> getRingers() {
        return ringers;
    }

    public void setRingers(List<Ringer> ringers) {
        this.ringers = ringers;
    }

    public void addRinger(Ringer ringer) {
        this.ringers.add(ringer);
    }

    public Long getId() {
        return id;
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

// standard overrides

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ApplicationUser applicationUser = (ApplicationUser) o;
        return id.equals(applicationUser.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
