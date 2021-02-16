namespace SpriteKind {
    export const LeftPaddles = SpriteKind.create()
    export const RightPaddles = SpriteKind.create()
}
function rightPaddleMove () {
    controller.player2.moveSprite(rightPaddle)
    rightPaddle = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        2 . . . . . . . . . . . . . . . 
        2 . . . . . . . . . . . . . . . 
        2 . . . . . . . . . . . . . . . 
        2 . . . . . . . . . . . . . . . 
        2 . . . . . . . . . . . . . . . 
        2 . . . . . . . . . . . . . . . 
        2 . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.RightPaddles)
    controller.moveSprite(rightPaddle)
    rightPaddle.setVelocity(0, 150)
    rightPaddle.x = 170
    rightPaddle.setStayInScreen(true)
}
function leftPaddleMove () {
    controller.player1.moveSprite(leftPaddles)
    leftPaddles = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        2 . . . . . . . . . . . . . . . 
        2 . . . . . . . . . . . . . . . 
        2 . . . . . . . . . . . . . . . 
        2 . . . . . . . . . . . . . . . 
        2 . . . . . . . . . . . . . . . 
        2 . . . . . . . . . . . . . . . 
        2 . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.LeftPaddles)
    controller.moveSprite(leftPaddles, 100, 100)
    leftPaddles.x = 0
    leftPaddles.setVelocity(0, 150)
    leftPaddles.setStayInScreen(true)
}
sprites.onOverlap(SpriteKind.LeftPaddles, SpriteKind.Player, function (sprite, otherSprite) {
    ball.setVelocity(-100, randint(0, 120))
    info.player1.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.RightPaddles, SpriteKind.Player, function (sprite, otherSprite) {
    ball.setVelocity(-100, randint(0, 120))
    info.player2.changeScoreBy(1)
})
function create_ball () {
    ball = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    ball.setBounceOnWall(true)
    ball.setVelocity(100, randint(0, 120))
}
let ball: Sprite = null
let leftPaddles: Sprite = null
let rightPaddle: Sprite = null
create_ball()
leftPaddleMove()
rightPaddleMove()
