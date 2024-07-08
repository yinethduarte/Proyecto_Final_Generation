package com.example.productos.Service;

import com.example.productos.Model.Producto;
import com.example.productos.Repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductoService {


    @Autowired
    private ProductoRepository productoRepository;

    public List<Producto>getAllProductos(){
        return productoRepository.findAll();

    }

    public Producto addProducto(Producto producto){
        return productoRepository.save(producto);
    }

    public  void deleteProductoById(Long id){
        productoRepository.deleteById(id);

    }
}
