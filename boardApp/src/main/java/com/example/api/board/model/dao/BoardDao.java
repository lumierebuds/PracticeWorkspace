package com.example.api.board.model.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import com.example.api.board.model.vo.Board;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class BoardDao {
	
	private final SqlSession session; 
	
	public List<Board> selectAllBoard() {
	
		return session.selectList("board.selectAllBoard");
	}

	public Board selectBoard(int boardNo) {
		return session.selectOne("board.selectBoard", boardNo);
	}

	public int insertBoard(Board board) {
		return session.insert("board.insertBoard", board);
	}

	public int deleteBoard(int boardNo) {
		return session.delete("board.deleteBoard", boardNo);
	}

	public int updateBoard(Board board) {
		return session.update("board.updateBoard",board);
	}



}
