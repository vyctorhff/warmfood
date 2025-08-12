package br.study.warmfood.ms_menu.adapters.web.controllers;

import br.study.warmfood.ms_menu.adapters.data.repo.InMemoryMenuRepository;
import br.study.warmfood.ms_menu.application.DailyMenu;
import br.study.warmfood.ms_menu.application.exception.DailyMenuNotFound;
import br.study.warmfood.ms_menu.application.port.GetDailyMenuPort;
import br.study.warmfood.ms_menu.domain.Menu;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("/menu/daily")
@RequiredArgsConstructor
public class DailyMenuController {

    private final InMemoryMenuRepository repo;

    @GetMapping
    public Menu findMenu() throws DailyMenuNotFound {
        GetDailyMenuPort port = new DailyMenu(repo);
        return port.get();
    }
}
