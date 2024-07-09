package com.example.productos.Controller;

import com.example.productos.Model.Producto;
import com.example.productos.Service.ProductoService;
import jakarta.persistence.Id;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/producto")
public class ProductoController {
    @Autowired
    private ProductoService productoService;

    @GetMapping("/obtener")
    public List<Producto>getAllProductos(){
        return productoService.getAllProductos();
    }

    @PostMapping("/agregar")

    public Producto addProducto(@RequestBody Producto producto){
        return productoService.addProducto(producto);
    }

    @DeleteMapping("/{id}")

    public void deleteProductoById(@PathVariable Long id){
        productoService.deleteProductoById(id);
    }
}
