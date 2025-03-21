package com.example.PortalSale.models;

import jakarta.persistence.*;

@Entity
@Table(name="usuarios")

public class Usuario {
    @Id
    private Integer RA;

    private String nome;
    private String senha;

    public Usuario() {
    }

    public Usuario(Integer RA, String nome, String senha) {
        this.RA = RA;
        this.nome = nome;
        this.senha = senha;
    }

    public Integer getRA() {
        return RA;
    }

    public void setRA(Integer RA) {
        this.RA = RA;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
}


