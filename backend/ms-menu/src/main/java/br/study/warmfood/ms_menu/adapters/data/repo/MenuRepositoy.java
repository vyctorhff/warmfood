package br.study.warmfood.ms_menu.adapters.data.repo;

import br.study.warmfood.ms_menu.adapters.data.entity.MenuEntity;
import br.study.warmfood.ms_menu.application.exception.DailyMenuNotFound;
import br.study.warmfood.ms_menu.application.port.GetDailyMenuPort;
import br.study.warmfood.ms_menu.domain.Menu;
import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public class MenuRepositoy extends SimpleJpaRepository<MenuEntity, Long> implements GetDailyMenuPort {

    private final EntityManager entityManager;

    public MenuRepositoy(Class<MenuEntity> domainClass, EntityManager entityManager) {
        super(domainClass, entityManager);
        this.entityManager = entityManager;
    }

    @Override
    public Menu get() throws DailyMenuNotFound {
        Query query = entityManager.createQuery("FROM Menu m ORDER BY m.publish DESC");

        try {
            query.setMaxResults(1);
            MenuEntity entity = (MenuEntity) query.getSingleResult();
            return new Menu();
        } catch (Exception e) {
            throw new DailyMenuNotFound("Today's menu not set");
        }
    }
}
