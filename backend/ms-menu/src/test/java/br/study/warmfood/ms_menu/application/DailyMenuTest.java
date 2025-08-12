package br.study.warmfood.ms_menu.application;

import br.study.warmfood.ms_menu.application.exception.DailyMenuNotFound;
import br.study.warmfood.ms_menu.application.port.MenuRepositoryPort;
import br.study.warmfood.ms_menu.domain.Menu;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;

class DailyMenuTest {

    private DailyMenu dailyMenu;

    private MenuRepositoryPort menuRepositoryPort;

    @BeforeEach
    void setUp() {
        menuRepositoryPort = Mockito.mock(MenuRepositoryPort.class);
        this.dailyMenu = new DailyMenu(menuRepositoryPort);
    }

    @Test
    void testGetMenuSuccessfully() throws DailyMenuNotFound {
        Mockito.when(menuRepositoryPort.findFirstMenu())
                .thenReturn(new Menu());
        Menu menu = dailyMenu.get();
        assertNotNull(menu);
    }

    @Test
    void testGetMenuNotFound() {
        assertThrows(DailyMenuNotFound.class, () -> {
            Menu menu = dailyMenu.get();
        });
    }
}