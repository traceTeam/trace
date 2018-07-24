
var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
mapOption = { 
    center: new daum.maps.LatLng(37.565017,126.949467), // 지도의 중심좌표
    level: 5 // 지도의 확대 레벨
};

var map = new daum.maps.Map(mapContainer, mapOption); 

var options = {
    map: map, // drawing manager로 그리기 요소를 그릴 map 객체 
    drawingMode: [ // drawing manager로 제공할 그리기 요소 모드
        daum.maps.drawing.OverlayType.MARKER,
        daum.maps.drawing.OverlayType.POLYLINE,
        daum.maps.drawing.OverlayType.RECTANGLE,
        daum.maps.drawing.OverlayType.CIRCLE,
        daum.maps.drawing.OverlayType.POLYGON
    ],
    guideTooltip: ['draw', 'drag', 'edit'], // 사용자에게 제공할 그리기 가이드 툴팁
    markerOptions: {
        draggable: true, // 마커를 그리고 나서 드래그 가능하게 한다
        removable: true // 마커를 삭제 할 수 있도록 x 버튼이 표시된다 
    },
    polylineOptions: {
        draggable: true, // 그린 후 드래그가 가능하며 guideTooltip옵션에 'drag'가 포함된 경우 툴팁이 표시된다
        removable: true, // 그린 후 삭제 할 수 있도록 x 버튼이 표시된다
        editable: true, // 그린 후 수정할 수 있도록 작은 사각형이 표시되며 guideTooltip옵션에 'edit'가 포함된 경우 툴팁이 표시된다
        strokeColor: '#39f', // 선 색
        hintStrokeStyle: 'dash', // 그리중 마우스를 따라다니는 보조선의 선 스타일
        hintStrokeOpacity: 0.5  // 그리중 마우스를 따라다니는 보조선의 투명도
    },
    rectangleOptions: {
        draggable: true,
        removable: true,
        editable: true,
        strokeColor: '#39f', // 외곽선 색
        fillColor: '#39f', // 채우기 색
        fillOpacity: 0.5 // 채우기색 투명도
    },
    circleOptions: {
        draggable: true,
        removable: true,
        editable: true,
        strokeColor: '#39f',
        fillColor: '#39f',
        fillOpacity: 0.5
    },
    polygonOptions: {
        draggable: true,
        removable: true,
        editable: true,
        strokeColor: '#39f',
        fillColor: '#39f',
        fillOpacity: 0.5,
        hintStrokeStyle: 'dash',
        hintStrokeOpacity: 0.5
    }
};


var manager = new daum.maps.drawing.DrawingManager(options);
	  function selectOverlay(type) {
    // 그리기 중이면 그리기를 취소합니다
    manager.cancel();

    // 클릭한 그리기 요소 타입을 선택합니다
    manager.select(daum.maps.drawing.OverlayType[type]);
}