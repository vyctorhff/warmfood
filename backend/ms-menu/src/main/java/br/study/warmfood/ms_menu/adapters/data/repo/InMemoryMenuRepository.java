package br.study.warmfood.ms_menu.adapters.data.repo;

import br.study.warmfood.ms_menu.domain.Menu;
import br.study.warmfood.ms_menu.application.port.MenuRepositoryPort;
import org.springframework.stereotype.Repository;

@Repository
public class InMemoryMenuRepository implements MenuRepositoryPort {
    @Override
    public Menu findFirstMenu() {
        return new Menu();
    }
}
