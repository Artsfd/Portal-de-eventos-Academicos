package com.example.PortalSale.repository;

import com.example.PortalSale.models.Evento;
import org.springframework.data.jpa.repository.JpaRepository;

//Faz as operações com o banco. A extenção garante automático a métodos de manipulação de dados
public interface EventoRepository extends JpaRepository<Evento, Long> {

}
