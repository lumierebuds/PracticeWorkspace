package com.example.api.board.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.api.board.model.service.BoardService;
import com.example.api.board.model.vo.Board;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequiredArgsConstructor
public class BoardController {
	
	private final BoardService service; 
	
	// 게시글 목록
	@CrossOrigin(origins= {"http://localhost:3000"})
	@GetMapping("/board") 
	public List<Board> selectAllBoard(){
		
		return service.selectAllBoard();
		
	}
	
	// 게시글 상세 조회
	@CrossOrigin(origins= {"http://localhost:3000"})
	@GetMapping("/detail/{boardNo}")
	public Board selectBoard(@PathVariable int boardNo) {
		return service.selectBoard(boardNo);
	}
	
	// 게시글 작성
	@CrossOrigin(origins= {"http://localhost:3000"})
	@PostMapping("/insert")
	public Map<String, Object> insertBoard(@RequestBody Board board) {
		log.debug("Board ? {}", board);
		
		Map<String, Object> map = new HashMap<>();
;		int result = service.insertBoard(board);
		if(result > 0) {
			map.put("msg", "게시글을 추가했습니다.");
			map.put("boardNo", board.getBoardNo());
		} else {
			map.put("msg", "게시글 추가를 실패했습니다.");
		}
		return map;
	}
	
	
	// 게시글 삭제 
	@CrossOrigin(origins = {"http://localhost:3000"})
	@DeleteMapping("/delete/{boardNo}")
	public Map<String, Object> deleteBoard(@PathVariable int boardNo){
		
		Map<String, Object> map = new HashMap<>();
		int result = service.deleteBoard(boardNo);
		if(result > 0) {
			map.put("msg", "게시글이 삭제되었습니다.");
		} else {
			map.put("msg", "게시글 삭제에 실패했습니다.");
		}
		return map;
	}
	
	
	// 게시글 수정
	@CrossOrigin(origins= {"http://localhost:3000"})
	@PutMapping("/update")
	public Map<String, Object> updateBoard(@RequestBody Board board){
		
		Map<String, Object> map = new HashMap<>();
		log.debug("board {}", board);
		int result = service.updateBoard(board);
		if(result > 0) {
			map.put("msg", "게시글이 수정되었습니다.");
		} else {
			map.put("msg", "게시글 수정에 실패했습니다.");
		}
		return map;
	}
	
	
}
