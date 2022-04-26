package io.github.project.clientes.rest;

import io.github.project.clientes.model.entity.Cliente;
import io.github.project.clientes.model.entity.ServicoContratado;
import io.github.project.clientes.model.repository.ClienteRepository;
import io.github.project.clientes.model.repository.ServicoContratadoRepository;
import io.github.project.clientes.rest.dto.ServicoContratadoDTO;
import io.github.project.clientes.util.BigDecimalConverter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/servicos-contratados")
@RequiredArgsConstructor
@CrossOrigin("http://localhost:4200")
public class ServicoContratadoController {

    private final ClienteRepository clienteRepository;
    private final ServicoContratadoRepository repository;
    private final BigDecimalConverter bigDecimalConverter;


    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ServicoContratado salvar( @RequestBody @Valid ServicoContratadoDTO dto){
        LocalDate data = LocalDate.parse(dto.getData(), DateTimeFormatter.ofPattern("dd/MM/yyyy"));
        Integer idCliente = dto.getIdCliente();
        Cliente cliente = clienteRepository
                .findById(idCliente)
                .orElseThrow(() ->
                        new ResponseStatusException(
                                HttpStatus.BAD_REQUEST, "Cliente inexistente"));


        ServicoContratado servicoContratado = new ServicoContratado();
        servicoContratado.setDescricao(dto.getDescricao());
        servicoContratado.setData( data );
        servicoContratado.setCliente(cliente);
        servicoContratado.setValor(  bigDecimalConverter.converter(dto.getPreco()));

        return repository.save(servicoContratado);
    }

    @GetMapping
    public List<ServicoContratado> pesquisar(
            @RequestParam(value = "nome", required = false, defaultValue = "") String nome,
            @RequestParam(value = "mes", required = false)Integer mes
    ){
        return repository.findByNomeClienteAndMes( "%" + nome + "%", mes);
    }


}
