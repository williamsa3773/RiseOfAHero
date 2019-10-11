class HerosController < ApplicationController
  before_action :set_hero, only: [:show, :update, :destroy]
  before_action :authorize_request

  # GET /heros
  def index
    @heros = Hero.all
    render json: @heros
  end

  # GET /heros/1
  def show
    render json: @hero
  end

  # POST /heros
  def create
    @hero = Hero.new(
      name: "NewHero",
      level: 1,
      exp: 0,
      str: 1,
      dex: 1,
      kno: 1,
      cha: 1,
      vit: 1,
      def: 1,
      skill_point: 7,
      user: @current_user
    )

    if @hero.save
      render json: @hero, status: :created
    else
      render json: @hero.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /heros/1
  def update
    puts hero_params
    puts @hero
    if @hero.update!(hero_params)
      render json: @hero
    else
      render json: @hero.errors, status: :unprocessable_entity
    end
  end

  # DELETE /heros/1
  def destroy
    @hero.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_hero
      @hero = Hero.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def hero_params
      params.require(:hero).permit(:images, :user_id, :name, :level, :exp, :str, :dex, :kno, :cha, :vit, :def, :skill_point)
    end
end
