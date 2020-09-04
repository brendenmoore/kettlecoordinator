package org.tampasa.kettles.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.util.Objects;

@Entity
public class Record{

    @Id
    @GeneratedValue
    private int id;

    @ManyToOne
    private Sheet sheet;

    @ManyToOne
    private Ringer ringer;

    @ManyToOne
    private Store store;

    private String clockIn;

    private String clockOut;

    private Number cash;

    private Number coin;

    private Number check;


    // Constructors


    public Record() {
    }

    // Getters and Setters
    public int getId() {
        return id;
    }

    public Sheet getSheet() {
        return sheet;
    }

    public void setSheet(Sheet sheet) {
        this.sheet = sheet;
    }

    public Ringer getRinger() {
        return ringer;
    }

    public void setRinger(Ringer ringer) {
        this.ringer = ringer;
    }

    public Store getStore() {
        return store;
    }

    public void setStore(Store store) {
        this.store = store;
    }

    public String getClockIn() {
        return clockIn;
    }

    public void setClockIn(String clockIn) {
        this.clockIn = clockIn;
    }

    public String getClockOut() {
        return clockOut;
    }

    public void setClockOut(String clockOut) {
        this.clockOut = clockOut;
    }

    public Number getCash() {
        return cash;
    }

    public void setCash(Number cash) {
        this.cash = cash;
    }

    public Number getCoin() {
        return coin;
    }

    public void setCoin(Number coin) {
        this.coin = coin;
    }

    public Number getCheck() {
        return check;
    }

    public void setCheck(Number check) {
        this.check = check;
    }

    // Overrides
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Record record = (Record) o;
        return id == record.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }


}
