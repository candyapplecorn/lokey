class Activity < ApplicationRecord
  validates :name, presence: true

  belongs_to :act_type, polymorphic: true

  has_many :interestings,
  primary_key: :id,
  foreign_key: :activity_id,
  class_name: :Interest,
  as: :act_type

  has_many :interested_persons,
  through: :interestings,
  source: :user
end
