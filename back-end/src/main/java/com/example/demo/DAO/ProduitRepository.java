package com.example.demo.DAO;

import java.awt.print.Pageable;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.demo.entities.Produit;

@CrossOrigin("*")
@RepositoryRestResource
public interface ProduitRepository extends JpaRepository<Produit, Long>{

	@RestResource(path = "/byDesignation")
	public List<Produit> findByDesignationContains(@Param("mc") String s);
	//@RestResource(path = "/byDesignationPage")
	//public Page<Produit> findByesignationContains(@Param("mc") String s, Pageable pageable);
    @RestResource(path = "/byPage")
    public Page<Produit> findPageByDesignationContains(@Param("cc") String s, org.springframework.data.domain.Pageable pageable);
}
 