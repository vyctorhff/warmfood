package br.study.warmfood.ms_menu.domain;

import lombok.EqualsAndHashCode;

import java.util.ArrayList;
import java.util.List;

@EqualsAndHashCode
public class Menu {

    private List<Meet> meets;
    private List<Juice> juices;
    private List<Bean> beans;
    private List<SideDishes> sideDishes;

    public Menu() {
        this.meets = new ArrayList<>();
        this.juices = new ArrayList<>();
        this.beans = new ArrayList<>();
        this.sideDishes = new ArrayList<>();
    }

    public void addMeet(Meet meet) {
        this.meets.add(meet);
    }

    public void addJuice(Juice juice) {}

    public void addBean(Bean bean) {}

    public void addSideDishe(SideDishes sideDishes) {}

}
