package br.study.warmfood.ms_menu.application.port;

import br.study.warmfood.ms_menu.application.exception.DailyMenuNotFound;
import br.study.warmfood.ms_menu.domain.Menu;

public interface GetDailyMenuPort {

    Menu get() throws DailyMenuNotFound;
}
