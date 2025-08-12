package br.study.warmfood.ms_menu.adapters.data.entity;

import jakarta.persistence.Entity;
import lombok.Data;
import org.springframework.data.annotation.Id;

import java.time.LocalDate;
import java.util.List;

@Data
@Entity(name = "Menu")
public class MenuEntity {

    @Id
    private Long id;

    private LocalDate publish;

//    private List<MeetEntity> meets;
//    private List<JuiceEntity> joices;
}
