package com.example.PortalSale.services;

import com.example.PortalSale.models.Usuario;
import com.example.PortalSale.repository.UsuarioRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {
    private final UsuarioRepository usuarioRepository;

    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    public Usuario salvarUsuario (Usuario usuario) {
        return usuarioRepository.save(usuario);
    }
    public List<Usuario> listarUsuario() {
        return usuarioRepository.findAll();
    }

}
