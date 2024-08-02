package com.example.api.board.model.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.api.board.model.dao.BoardDao;
import com.example.api.board.model.vo.Board;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BoardService {
	
	private final BoardDao dao;
	
	public List<Board> selectAllBoard() {
		return dao.selectAllBoard();
	}

	public Board selectBoard(int boardNo) {
		return dao.selectBoard(boardNo);
	}

	public int insertBoard(Board board) {
		return dao.insertBoard(board);
	}

	public int deleteBoard(int boardNo) {
		return dao.deleteBoard(boardNo);
	}

	public int updateBoard(Board board) {
		return dao.updateBoard(board);
	}
	
	
	
	
}
