package com.rafael.jwt.backend.entites;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@Entity
@Table(name = "app_reimbursement")
public class Reimbursement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "amount", nullable = false)
    @Size(max = 100)
    private String amount;

    @Column(name = "description", nullable = false)
    @Size(max = 100)
    private String description;

    
    @Column(name = "status")
    @Size(max = 100)
    private String status;

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;

}
