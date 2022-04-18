package io.github.project.clientes.exception;

public class UsuarioCadastradoException extends  RuntimeException{

    public UsuarioCadastradoException(String login){
        super("Usuario já cadastrado " + login);
    }
}
