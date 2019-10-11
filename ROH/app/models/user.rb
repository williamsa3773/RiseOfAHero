class User < ApplicationRecord
  has_secure_password

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 6 }

  has_many :heros

  def gen_hero1
    Hero.create!(
      name: "noob1",
      level: 1,
      exp: 0,
      str: 1,
      dex: 1,
      kno: 1,
      cha: 1,
      vit: 1,
      def: 1,
      user: self,
      skill_point: 7,
    )
  end

  def gen_hero2
    Hero.create!(
      name: "noob2",
      level: 1,
      exp: 0,
      str: 1,
      dex: 1,
      kno: 1,
      cha: 1,
      vit: 1,
      def: 1,
      user: self,
      skill_point: 7,
    )
  end

  def gen_hero3
    Hero.create!(
      name: "noob3",
      level: 1,
      exp: 0,
      str: 1,
      dex: 1,
      kno: 1,
      cha: 1,
      vit: 1,
      def: 1,
      user: self,
      skill_point: 7,
    )
  end
end
