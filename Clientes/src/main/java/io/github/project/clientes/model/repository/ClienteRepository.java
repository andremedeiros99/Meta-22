package io.github.project.clientes.model.repository;

import io.github.project.clientes.model.entity.Cliente;
import io.github.project.clientes.model.entity.ServicoPrestado;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ClienteRepository extends JpaRepository<Cliente, Integer> {
}
