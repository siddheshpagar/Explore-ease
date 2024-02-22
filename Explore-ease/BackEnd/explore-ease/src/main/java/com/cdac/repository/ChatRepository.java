package com.cdac.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cdac.entity.Chat;
@Repository
public interface ChatRepository extends JpaRepository<Chat, Integer> {
	List<Chat> findBySenderId(int Senderid);
	List<Chat> findByReceiverId(int Receiverid);
}
