package br.study.warmfood.ms_menu.application.port;

import br.study.warmfood.ms_menu.domain.Menu;

public interface MenuRepositoryPort {
    Menu findFirstMenu();
}
