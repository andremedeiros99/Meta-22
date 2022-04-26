package io.github.project.clientes.model.repository;

import io.github.project.clientes.model.entity.ServicoContratado;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ServicoContratadoRepository extends JpaRepository<ServicoContratado, Integer> {

    @Query(" select s from ServicoContratado s join s.cliente c where upper( c.nome ) like upper( :nome ) and FUNCTION('MONTH',c.dataCadastro)= :mes ")
    List<ServicoContratado> findByNomeClienteAndMes(
            @Param("nome")String nome, @Param("mes")Integer mes);


}
