package br.study.warmfood.ms_menu.infra.handlers;

import br.study.warmfood.ms_menu.application.exception.DailyMenuNotFound;
import br.study.warmfood.ms_menu.application.exception.MenuException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class MenuHandlers {

    @ExceptionHandler(MenuException.class)
    public ResponseEntity<String> generic(MenuException e) {
        return ResponseEntity.internalServerError().body("Menu internal error");
    }

    @ExceptionHandler(DailyMenuNotFound.class)
    public ResponseEntity<Void> notFound(DailyMenuNotFound ex) {
        return ResponseEntity.notFound().build();
    }
}
