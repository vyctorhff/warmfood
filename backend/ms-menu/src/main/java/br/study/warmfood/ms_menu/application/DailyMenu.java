package br.study.warmfood.ms_menu.application;

import br.study.warmfood.ms_menu.application.exception.DailyMenuNotFound;
import br.study.warmfood.ms_menu.application.port.GetDailyMenuPort;
import br.study.warmfood.ms_menu.application.port.MenuRepositoryPort;
import br.study.warmfood.ms_menu.domain.Menu;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class DailyMenu implements GetDailyMenuPort {

    private final MenuRepositoryPort repository;

    @Override
    public Menu get() throws DailyMenuNotFound {
        Menu menu = repository.findFirstMenu();
        if (menu == null) {
            throw new DailyMenuNotFound("Menu do not exist");
        }
        return menu;
    }
}
