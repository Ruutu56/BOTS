package com.bots.beans;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;


@Entity
@Data
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class PaymentDetails {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int pid;
	private String card_no;
	private String exp_date;
	private String cv;
	private String card_owner;
	private int bk_id;
	
	
	public PaymentDetails(String card_no, String exp_date, String cv, String card_owner, int bk_id) {
		super();
		this.card_no = card_no;
		this.exp_date = exp_date;
		this.cv = cv;
		this.card_owner = card_owner;
		this.bk_id = bk_id;
	}
	
	
	
	
	
}
